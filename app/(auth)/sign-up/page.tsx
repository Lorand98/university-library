"use client";

import AuthForm from "@/components/AuthForm";
import { signUp } from "@/actions/auth";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        universityId: 0,
        universityCard: "",
        password: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default Page;
