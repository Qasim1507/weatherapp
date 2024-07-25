import styled from "styled-components";
import React from "react";
import mainIcon from "../icon/perfect-day.svg";
import SuprSendInbox from '@suprsend/react-inbox';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SuprSendProvider } from "@suprsend/react-inbox";

// Styles for the bell icon
const InboxContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10; // Ensures it stays on top
`;

// Styles for the SearchBox
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Mukta;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Mukta;
    font-weight: bold;
  }
`;

// Styles for the ChooseCityLabel
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

// Styles for the WelcomeWeatherLogo
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

// CityComponent functional component
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  const workspaceKey = 'SS.jnNQYP9B9bBrevx3KdH0'; // Replace with actual workspace key from SuprSend
  const subscriberId = 'tester'; // Replace with actual subscriberId
  const distinctId = 'https://app.suprsend.com/en/sandbox/subscribers/nalawalaq@gmail.com'; // Replace with actual distinctId

  return (
    <>
    <SuprSendProvider workspaceKey={workspaceKey} subscriberId={subscriberId}>
    <InboxContainer>
      <SuprSendInbox
        workspaceKey={workspaceKey}
        subscriberId={subscriberId}
        distinctId={distinctId}
        themeType="light"
        theme={{ bell: { color: 'blue' }, badge: { backgroundColor: 'pink', color: 'black', margin: '0px' }}}
        badgeComponent={(count) => <p>{count}</p>}
      />
    </InboxContainer>
      <WelcomeWeatherLogo src={mainIcon} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
      </SuprSendProvider>
    </>
  );
};

export default CityComponent;
