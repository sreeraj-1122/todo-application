import React, { useState } from "react";
import "./Home.css";
import Addtodo from "../../components/todo add/Addtodo";
import Task from "../../components/Tasks/Task";
import Logout from "../../components/Logout/Logout";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const navigate = useNavigate();
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="home-section">
      <div className="left-home-section">
        <div className="home-logo">
          <svg
            className="svg-img"
            viewBox="0 0 44 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8014 0.00107963C20.3383 0.00179549 17.9764 0.979076 16.2347 2.71809C14.4931 4.45709 13.5143 6.81551 13.5136 9.27482V13.4877H9.29431C8.07373 13.4867 6.86492 13.726 5.73705 14.192C4.6092 14.6579 3.58443 15.3414 2.72137 16.2032C1.85831 17.0649 1.17391 18.0882 0.707315 19.2144C0.240727 20.3406 0.00111195 21.5476 0.00217905 22.7663V32.0368H13.5114V40.4626H9.29214C6.82838 40.4622 4.46538 41.4391 2.72282 43.1782C0.980269 44.9173 0.000860639 47.2761 0 49.7362V65.758H9.29649C10.5159 65.7575 11.7232 65.5172 12.8496 65.0504C13.976 64.584 14.9992 63.9004 15.861 63.0391C16.7228 62.1777 17.4061 61.1551 17.8721 60.0298C18.3381 58.9044 18.5775 57.6989 18.5767 56.4814H18.5886V50.3604L18.5637 50.3637V11.3678L18.5843 11.3726V9.27644C18.5864 8.15872 19.0313 7.08721 19.8218 6.2958C20.6122 5.50439 21.6841 5.05735 22.8036 5.05221H38.9391V9.27644C38.9356 10.3937 38.4892 11.464 37.6976 12.2535C36.9059 13.043 35.8333 13.4873 34.7144 13.4893H20.4938V18.5459H34.7122C37.1753 18.546 39.5375 17.5692 41.2793 15.8304C43.0211 14.0915 43.9997 11.7331 44 9.27375V0L22.8014 0.00107963ZM13.5136 26.9797H5.07179V22.7668C5.07365 21.6478 5.51902 20.575 6.31067 19.7828C7.10226 18.9907 8.17576 18.5436 9.29649 18.5394H13.5158L13.5136 26.9797ZM13.5136 56.486C13.5117 57.6031 13.0667 58.6742 12.276 59.4643C11.4853 60.2548 10.4131 60.7003 9.29431 60.7031H5.06962V49.7389C5.07064 48.621 5.51624 47.5493 6.30844 46.7593C7.10069 45.9692 8.17465 45.5257 9.29431 45.5261H13.5136V56.486ZM20.4938 32.0362H31.1502V36.2534C31.146 37.3705 30.6994 38.4404 29.9079 39.2298C29.1164 40.0191 28.0442 40.4636 26.9255 40.4663H20.4938V45.5261H26.9276C28.1475 45.5267 29.3556 45.2873 30.4827 44.8215C31.6098 44.3557 32.634 43.6726 33.4965 42.8113C34.3591 41.95 35.0432 40.9274 35.5098 39.802C35.9763 38.6766 36.2161 37.4704 36.2155 36.2524H36.2198V26.9786H20.4938V32.0362Z"
              fill="#00314F"
            />
          </svg>
        </div>
        <div className="todo-content-section">
          <h3>TODO</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at
            eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat
            vitae faucibus nibh dolor dui.{" "}
          </p>
          <Addtodo />
        </div>
      </div>
      <div className="right-home-section">
        <hr className="sideline" />
        <div className="todo-main-section">
          <div className="todo-body">
            <h2>TODO LIST</h2>
            <button className="logout-btn" onClick={() => navigate("/logout")}>
              Logout
            </button>
            <div className="todo-header">
              <div className="todo-inputs">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <img src="" alt="" />
              </div>
              <div className="todo-inputs">
                <select
                  className="filter"
                  value={selectedFilter}
                  onChange={handleFilterChange}
                >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="favourite">Favourite</option>
                  <option value="deleted">Deleted</option>
                </select>
              </div>
            </div>
          </div>
          <Task selectedFilter={selectedFilter} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default Home;
