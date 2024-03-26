/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo-transparent.png";

const Footer = () => {
  return (
    <div className="px-10 text-white bg-green-950">
      <div className="text-md py-8">
        <p>
          <span className="font-bold">Disclaimer:</span> Any Advice or
          information on this website is General Advice Only - It does not take
          into account your personal circumstances, please do not trade or
          invest based solely on this information. By viewing any material or
          using the information within this site you agree that this is general
          education material and you will not hold any person or entity
          responsible for loss or damages resulting from the content or general
          opinion provided here by Daily Price Action, it's employees, directors
          or fellow members. Futures, options, and spot currency trading have
          large potential rewards, but also large potential risk. You must be
          aware of the risks and be willing to accept them in order to invest in
          the futures and options markets. Don't trade with money you can't
          afford to lose. This website is neither a solicitation nor an offer to
          Buy/Sell futures, spot forex, cfd's, options or other financial
          products. No representation is being made that any account will or is
          likely to achieve profits or losses similar to those discussed in any
          material on this website. The past performance of any trading system
          or methodology is not indicative of future results.
        </p>
        <p className="pt-4">
          <span className="font-bold">High Risk Warning:</span> Forex, Futures,
          and Options trading has large potential rewards, but also large
          potential risks. The high degree of leverage can work against you as
          well as for you. You must be aware of the risks of investing in forex,
          futures, and options and be willing to accept them in order to trade
          in these markets. Forex trading involves substantial risk of loss and
          is not suitable for all investors. Please do not trade with borrowed
          money or money you cannot afford to lose. Any opinions, news,
          research, analysis, prices, or other information contained on this
          website is provided as general market commentary and does not
          constitute investment advice. We will not accept liability for any
          loss or damage, including without limitation to, any loss of profit,
          which may arise directly or indirectly from the use of or reliance on
          such information. Please remember that the past performance of any
          trading system or methodology is not necessarily indicative of future
          results.{" "}
        </p>
      </div>
      <footer className="footer p-10  ">
        <aside>
          <img className="max-w-40" src={logo} alt="" />
          
        </aside>
        <nav>
          <h6 className="text-xl font-bold text-white">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Blogs</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-white">Company</h6>
          <Link className="link link-hover">
            <NavLink to={"/aboutUs"}>About us</NavLink>
          </Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Broker</Link>
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-white">Members</h6>
          <Link className="link link-hover">
            <NavLink to={"/register"}>Register Now</NavLink>
          </Link>
        </nav>
      </footer>
      <div className="text-center pb-10">
      <p className="text-xl font-bold  pb-2">
            <span className="text-green-600">FOREX</span>
            <span>02</span>
            <span className="text-red-600">HERO</span>
          </p>
          <p className="text-md">Copyright &copy; 2023 FOREX02HERO Limited, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
