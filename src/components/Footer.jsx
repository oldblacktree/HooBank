import style from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="py-6 sm:py-16 mt-6 ">
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex sm:max-md:flex-row sm:max-md:items-center sm:max-md:justify-between flex-col flex-1 mr-10 gap-5">
        <img src={logo} alt="" className="w-[266px] h-[72px] object-contain" />
        <p className={`${style.paragraph} max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex flex-[1.5] justify-between flex-wrap w-full mt-10 md:mt-0 gap-6">
        {footerLinks.map((footerLink) => (
          <div className="" key={footerLink.title}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="flex flex-col list-none mt-6 gap-3">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center flex-col sm:flex-row pt-6 border-t-[1px] border-t-[#3F3E45] mt-10 w-full gap-4">
      <p className="font-poppins text-center text-[14px] md:text-[18px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row gap-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[21px] h-[21px] object-contain cursor-pointer"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
