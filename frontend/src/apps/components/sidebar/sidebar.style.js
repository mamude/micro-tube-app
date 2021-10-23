import styled from 'styled-components';

const Sidebar = styled.div`
  height: 100%;
  width: 230px;
  background-color: white;
`;

const SidebarCategories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const SidebarCategory = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 25px;
`;

const SidebarCategorySpan = styled.span`
  margin-left: 15px;
`;

export {
  Sidebar, SidebarCategories, SidebarCategory, SidebarCategorySpan
}