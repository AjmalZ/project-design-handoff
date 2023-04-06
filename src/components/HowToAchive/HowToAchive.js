/* eslint-disable indent */
// /////////////// IMPORT //////////////////////// //
import React from 'react';
import './HowToAchive.css';
import styled from 'styled-components';
import { StartButton } from 'components/StartButton/StartButton';
// /////////////// COMPONENT //////////////////////// //
export const BoldBigItalic = styled.h2`
font-size: 1.8rem;
font-weight: bold;
font-style: italic;
color: white;
`
export const SmallNarrowItalic = styled.h2`
font-size: 1.1rem;
font-weight: narrow;
font-style: italic;
color: white;
`
export const HowToAchive = () => {
    return (
        <div className="how-to-achive-container">
            <h1 className="title">
                <SmallNarrowItalic>WORKOUT WHERE</SmallNarrowItalic>
                <BoldBigItalic>YOU ARE</BoldBigItalic>
            </h1>
            <div className="how-to-achive-picture">
                <img className="phone-picture" src="./images/image116.svg" alt="phonepicture" />
            </div>
            <div className="how-to-Achive-text">
                <h2>
                    <div className="flex">
                        <BoldBigItalic>SCHEDULE</BoldBigItalic>
                        <SmallNarrowItalic>WORKOUTS</SmallNarrowItalic>
                    </div>
                    <div className="flex">
                        <SmallNarrowItalic>GET</SmallNarrowItalic>
                        <BoldBigItalic>REMINDERS</BoldBigItalic>
                    </div>
                    <div className="flex">
                        <BoldBigItalic>TRACK</BoldBigItalic>
                        <SmallNarrowItalic>YOUR PROGRESS</SmallNarrowItalic>
                    </div>
                    <div className="flex">
                        <SmallNarrowItalic>BE</SmallNarrowItalic>
                        <BoldBigItalic>SPONTANEOUS</BoldBigItalic>
                    </div>
                    <div className="flex">
                        <BoldBigItalic>SAVE</BoldBigItalic>
                        <SmallNarrowItalic>YOUR FAVOURITES</SmallNarrowItalic>
                    </div>
                    <div className="flex">
                        <SmallNarrowItalic>CELEBRATE YOUR</SmallNarrowItalic>
                        <BoldBigItalic>GOALS</BoldBigItalic>
                    </div>
                </h2>
            </div>
            <div className="how-to-achive-buttons">
                <StartButton outlinedlong>Download App</StartButton>
            </div>
        </div>
    )
}