import React from "react";
import { Button } from "../elements/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16 mb-20">
      <div className="space-y-12">
        <div>
          <label
            htmlFor="name"
            className="text-white block mb-6 text-xl font-bold"
          >
            お名前
          </label>
          <input
            id="name"
            type="text"
            className="w-full border-inputBorder bg-input px-4 py-4"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-white block mb-6 text-xl font-bold"
          >
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            className="w-full border-inputBorder bg-input px-4 py-4"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-white block mb-6 text-xl font-bold"
          >
            メッセージ
          </label>
          <textarea
            id="message"
            className="w-full border-inputBorder bg-input px-4 py-4"
          />
        </div>
        <Button className="px-8 py-3">送信</Button>
      </div>
      <div className="space-y-12 mt-10 lg:mt-0">
        <div className="flex justify-start">
          <div className="text-xl font-bold">連絡先：</div>
          <Link
            href="mailto:yuto.0313king@gmail.com"
            className="underline text-blue-500"
          >
            yuto.0313king@gmail.com
          </Link>
        </div>
        <div className="flex justify-start space-x-4">
          <Link href="#contact">
            <FontAwesomeIcon icon={faTwitter} className="w-8 text-blue-400" />
          </Link>
          <Link href="#contact">
            <FontAwesomeIcon icon={faInstagram} className="w-8 text-pink-400" />
          </Link>
          <Link href="#contact">
            <FontAwesomeIcon icon={faFacebook} className="w-8 text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
