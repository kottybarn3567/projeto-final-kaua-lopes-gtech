import styled from "styled-components";

const MainContainer = styled.main `
    width: 100%;
    box-sizing: border-box;

    & article {
        display: flex;
        width: 100%;
        height: 681px;
        padding: 40px;
    }
`;

const HomePage = () => {
    return (
        <MainContainer>
            <section>
                <article className="bg-light-gray-3">
                    
                </article>
            </section>
        </MainContainer>
    );
}
 
export default HomePage;