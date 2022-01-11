import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import colors from "../styles/colors";
import { Loader } from "../styles/Loader";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const Freelances = () => {
  const [freelancersList, setFreelancersList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    fetch("http://localhost:8000/freelances")
      .then((res) => res.json())
      .then(({ freelancersList }) => {
        setFreelancersList(freelancersList);
        setDataLoading(false);
      });
  }, []);

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny, les meilleurs profils sont réunis pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
};

export default Freelances;
