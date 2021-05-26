import styled from '@emotion/styled';

export const MainViewContainer = styled.div`
    width: 100%;
    // padding: 100px;
    text-align: center;
    margin-left: ${p => p.isSidebarOpen ? '250px' : '80px'};
    overflow-x: hidden; //hiding horizontal scrollbar
`