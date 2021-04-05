import styled from "styled-components";
import { motion } from "framer-motion";

// Common styled components for About, Services and Faq Sections

export const StyledDiv = styled(motion.div)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 10rem;
  color: white;
  overflow-y: hidden;
`;
export const StyledDescription = styled.div`
  flex: 1;
  padding: 5rem;
  overflow-y: hidden;
  h2 {
    font-weight: lighter;
  }
`;
export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 80%;
    height: 80vh;
    object-fit: cover;
    border-radius: 10px;
    z-index: 10;
  }
`;

// Services Section

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Card = styled.div`
  flex-basis: 12rem;
  .icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
// Navbar Section

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  overflow-y: hidden;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
  }
  .logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    color: white;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
