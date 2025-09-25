"use client";

import { DefaultSeo } from "next-seo";

export default function SEO() {
  return (
    <DefaultSeo
      titleTemplate="%s | Zuit Up"
      defaultTitle="Zuit Up — Elevate your workflow"
      description="Zuit Up is a modern toolkit to elevate your workflow."
      openGraph={{
        type: "website",
        siteName: "Zuit Up",
        url: "https://zuitup.example.com",
      }}
      twitter={{ cardType: "summary_large_image" }}
    />
  );
}


