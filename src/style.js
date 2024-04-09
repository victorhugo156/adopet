
//In react Native the style sheet is .js not .css
import styled from "styled-components/native";

export const Container = styled.View `
    background-color:#AAFF00;
    flex: 1;
`;

export const ContainerContent = styled.View `
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 128px;
    padding-left: 112px;
    padding-right: 112px;
`;

export const Btn = styled.TouchableOpacity `
    background-color: ${(props)=> props.backgroundColor ? props.backgroundColor: '#72A603'};
    width:180px;
    height:40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px #72A603;
    border-radius: 8px;

    margin-bottom: 10px;

`;

export const BtnTextBG = styled.Text `
    font-size: 16px;
    font-weight: bold;

    color: white;
`;

export const BtnText = styled.Text `
    font-size: 16px;
    font-weight: bold;

    color: #203A40;
`;

export const ContainerForm = styled.View `
   display:'flex';
   align-items: center;

   padding-top: 23px;

   margin-bottom: 42px;

`;

export const Label = styled.Text `
   font-size: 16px;
   font-weight: bold;
   color: #737380 ;

   margin-bottom: 12px;

`;

export const Input = styled.TextInput ` 

    background-color: #F6F6F6;
    width: 312px;
    height: 40px;

    text-align: center;

    border-radius: 8px;

    margin-bottom: 18px;
`;