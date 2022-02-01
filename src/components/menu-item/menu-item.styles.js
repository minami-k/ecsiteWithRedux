import styled from 'styled-components'

export const MenuItemContainer = styled.div`
    width: 100%;
    height: ${( size ) => ( size ? '380px' : '240px')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & .content {
            opacity: 0.9;
            transform: scale(1.2);
            transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
`

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${( { imageUrl }) => `url(${imageUrl})`}
`

export const ContentContainer = styled.div`

    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`
export const ContentTitle = styled.h1`
    font-family: Playfair;
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;

`
export const ContentSubTitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`
  