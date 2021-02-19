import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledModal = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const StyledModalContent = styled(motion.div)`
  background-color: #fff;
  padding: 3rem 0;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 2rem;
`;

export const StyledModalCloseWrapper = styled.div`
  width: 100%auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;
