import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-5 items-center shadow-md">
      <Image src={"/coursemate_prev_ui.png"} width={200} height={100} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
