import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    var portfolio = this.props.data.projects.map(function (project) {
      var imageUrl =
        "images/portfolio/" + (project.image ? project.image : "sample-image.svg");

      // 定义点击处理函数
      const handleClick = (e) => {
        if (!project.url) {
          e.preventDefault(); // 禁用跳转行为
        }
      };

      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.url || "#"} onClick={handleClick} title={project.title}>
              <img alt={project.title} src={imageUrl} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolio}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
