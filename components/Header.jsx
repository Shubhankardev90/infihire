import React,{useState} from "react";
import headerStyles from '../styles/Header.module.css'
import Image from 'next/future/image'
import Logo from '../public/logo.png'
import NextLink from 'next/link'
import {Box, Link} from '@chakra-ui/react'
import {BsTwitter,BsGoogle,BsLinkedin,BsFacebook} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
  const [activeMenu,setActiveMenu]=useState(false)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
      <Image src={Logo}/>
      </div>
      <div className={activeMenu ? headerStyles.navigationMenuActive : headerStyles.navigationMenu}>
      <NextLink href='/' passHref>
        <Link className={headerStyles.activeNavLink}>Home</Link>
      </NextLink>
      <NextLink href='/vendor' passHref>
        <Link className={headerStyles.navLinks}>Vendor</Link>
      </NextLink>
      <NextLink href='/recruiter' passHref>
        <Link className={headerStyles.navLinks}>Recruiters</Link>
      </NextLink>
      <NextLink href='/about' passHref>
        <Link className={headerStyles.navLinks}>About</Link>
      </NextLink>
      <NextLink href='/contact' passHref>
        <Link className={headerStyles.navLinks}>Contact Us</Link>
      </NextLink>
      </div>
      <div className={headerStyles.headerSocialIcons}>
      <NextLink passHref href='twitter.com'>
      <Box p="2" bgColor="gray.100" borderRadius="50%" _hover={{bgColor:"gray.200"}} >
      <BsTwitter color="skyblue" size={20}/>
      </Box>
      </NextLink>
      <NextLink passHref href='facebook.com'>
      <Box p="2" bgColor="gray.100" borderRadius="50%" _hover={{bgColor:"gray.200"}}>
      <BsFacebook color="#4267B2" size={20}/>
      </Box>
      </NextLink>
      <NextLink passHref href='Google.com'>
      <Box p="2" bgColor="gray.100" borderRadius="50%" _hover={{bgColor:"gray.200"}}>
      <BsGoogle color="#db4a39 " size={20}/>
      </Box>
      </NextLink>
      <NextLink passHref href='linkedin.in'>
      <Box p="2" bgColor="gray.100" borderRadius="50%" _hover={{bgColor:"gray.200"}}>
      <BsLinkedin color="#0A66C2" size={20}/>
      </Box>
      </NextLink>
      </div>
       <Box className={headerStyles.headerTrigger} display={{base:"block",md:"none",sm:"block",lg:"none"}} onClick={()=>setActiveMenu(!activeMenu)}>
        <GiHamburgerMenu size="20" />
       </Box>
    </header>
  );
};

export default Header;
