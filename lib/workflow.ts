import { Client as WorkflowClient } from "@upstash/workflow";
import config from "./config";
import { Client as QStashClient, resend } from "@upstash/qstash";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qStashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  console.log("Sending email to", email);
  await qStashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "Lorand <contact@lorand-dev.xyz>",
      to: [email],
      subject,
      html: message,
    },
  });
};
