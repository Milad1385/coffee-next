"use server";
import Loader from "@/components/modules/Loader/Loader";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
