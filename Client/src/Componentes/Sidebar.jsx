import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pmd-navbar pmd-z-depth">
        <Link className="navbar-brand" to="/">Brand</Link>
        
        <div className="pmd-navbar-right-icon ml-auto"> 
          <button className="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect">
            <i className="material-icons pmd-sm md-light">search</i>
          </button>
          
          <button className="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle" data-target="basicSidebar" data-placement="right" data-position='fixed'>
            <i className="material-icons md-light">more_horiz</i>
          </button>
        </div>
      </nav>

      <section id="pmd-main">
        <aside id="basicSidebar" className="pmd-sidebar bg-light pmd-z-depth" role="navigation">
          <ul className="nav flex-column pmd-sidebar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <i className="material-icons pmd-list-icon pmd-sm">delete</i>
                <span className="media-body">View Profile</span>
              </Link>
            </li>
            <div className="pmd-nav-item-divider"></div>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <i className="material-icons pmd-list-icon pmd-sm">delete</i>
                <span className="media-body">Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <i className="material-icons pmd-list-icon pmd-sm">delete</i>
                <span className="media-body">Logout</span>
              </Link>
            </li>
          </ul>
        </aside>
        
        <div className="pmd-sidebar-overlay"></div>
        
        <div className="pmd-content custom-pmd-content" id="content">
          <h2 className="headline">Sidebar Constructor</h2>
          <p>This structure shows a permanent app bar with a floating action button. The app bar absorbs elements from the tablet and mobile bottom bars.</p>
          <p style={{ marginBottom: 0 }}>An optional bottom bar can be added for additional functionality or action overflow. A side nav overlays all other structural elements. A right nav menu can be accessed temporarily or pinned for permanent display.<br /><br /></p>
        </div>
      </section>
    </div>
  );
}
