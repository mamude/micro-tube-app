import { Sidebar, SidebarCategories, SidebarCategory, SidebarCategorySpan } from "./sidebar.style"

const MainSidebar = () => {
  return (
    <Sidebar>
      <SidebarCategories>
        <SidebarCategory>
          <i className="material-icons">home</i>
          <SidebarCategorySpan>Home</SidebarCategorySpan>
        </SidebarCategory>
        <SidebarCategory>
          <i className="material-icons">local_fire_department</i>
          <SidebarCategorySpan>Trendings</SidebarCategorySpan>
        </SidebarCategory>
        <SidebarCategory>
          <i className="material-icons">subscriptions</i>
          <SidebarCategorySpan>Subscriptions</SidebarCategorySpan>
        </SidebarCategory>
      </SidebarCategories>
      <hr />
      <SidebarCategories>
        <SidebarCategory>
          <i className="material-icons">library_add_check</i>
          <SidebarCategorySpan>Library</SidebarCategorySpan>
        </SidebarCategory>
        <SidebarCategory>
          <i className="material-icons">history</i>
          <SidebarCategorySpan>History</SidebarCategorySpan>
        </SidebarCategory>
        <SidebarCategory>
          <i className="material-icons">play_arrow</i>
          <SidebarCategorySpan>Your Videos</SidebarCategorySpan>
        </SidebarCategory>
        <SidebarCategory>
          <i className="material-icons">watch_later</i>
          <SidebarCategorySpan>Watch Later</SidebarCategorySpan>
        </SidebarCategory>
        <SidebarCategory>
          <i className="material-icons">thumb_up</i>
          <SidebarCategorySpan>Liked Videos</SidebarCategorySpan>
        </SidebarCategory>
      </SidebarCategories>
    </Sidebar>
  )
}

export default MainSidebar;