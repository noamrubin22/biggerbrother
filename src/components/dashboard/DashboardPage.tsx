import React, { useContext } from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Politicians } from "./Politicians";
import { Form } from "./Form";
import { useFormContext } from "../layout/Layout";

export const DashboardPage = () => {
  const router = useRouter();
  const { showPoliticianForm } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 8 }}
    >
      {showPoliticianForm ? <Form /> : <Politicians />}
    </motion.div>
  );
};
