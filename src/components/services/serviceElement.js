import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #101522;

  @media screen and (max-width: 768px) {
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    height: 900px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;


  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: auto;
  }

  @media screen and (max-width: 786) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    width: 100%;
  }
`;

export const ServicesIcon = styled.img`
  height: 150px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 4rem;
  /* margin-top: 3rem */
  
  /* justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto; */
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  color: black;
`;
export const ServicesP = styled.p`
  font-size: 0.7rem;
  font-weight: normal;
  text-align: center;
  color: black;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;
