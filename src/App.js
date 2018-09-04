import React, { Component } from 'react';
/*import logo from './logo.jpg';*/
import './App.css';
import dog from './doggie.mp4';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class AppHeaderBar extends Component {
  render() {
    return (
      <header className="AppHeader">
        <HomeButton section="Blog" onNavClick={this.props.onNavClick}/>
        <TopNavBar onNavClick={this.props.onNavClick}/>
      </header>
    );
  }
}

class HomeButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onNavClick(this.props.section);
  }
  render() {
    return (
      <i className="fa fa-home WhiteIcon" onClick={this.handleClick}/>
      //<ul onClick={this.handleClick}>Home</ul>
    )
  }
}

class TopNavBar extends Component {
  render() {
    return (
      <nav className="TopNav">
        <NavButton section="Blog" onNavClick={this.props.onNavClick}/>
        <NavButton section="Projects" onNavClick={this.props.onNavClick}/>
        <NavButton section="About Me" onNavClick={this.props.onNavClick}/>
      </nav>
    );
  }
}

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onNavClick(this.props.section);
  }

  render() {
    return (
      <ul onClick={this.handleClick}>{this.props.section}</ul>
    );
  }
}

class MainBody extends Component {
  render() {
    return (
      this.props.section === "BlogPost" ? <ThreeContentSections section={this.props.section} onNavClick={this.props.onNavClick} /> : 
        <TwoContentSections section={this.props.section} onPostClick={this.props.onPostClick} />
      //<TwoContentSections section={this.props.section} />
    );
  }
}

class TwoContentSections extends Component {
  render() {
    return (
      <div className="Main">
        <div className="LeftContent">
          <LeftContent section={this.props.section} />
        </div>
        <div className="RightContent">
          <RightContent section={this.props.section} onPostClick={this.props.onPostClick} />
        </div>
      </div>
    );
  }
}

class ThreeContentSections extends Component {
  render() {
    return (
      <div className="Main">
        <div className="LeftContent">
          <LeftContent section={this.props.section} column="left" onNavClick={this.props.onNavClick}/>
        </div>
        <div className="MiddleContent">
          <MiddleContent section={this.props.section} column="middle" />
        </div>
        <div className="RightContent">
          <RightContent section={this.props.section} />
        </div>
      </div>
    );
  }
}

class LeftContent extends Component {
  render() {
    const section = this.props.section;
    if (section === "BlogPost") {
      return (
        <SectionHeader title="Blog" section={section} column={this.props.column} onNavClick={this.props.onNavClick}/>
      )
    }
    return <FunnyGif />;
  }
}

class FunnyGif extends Component {
  render() {
    return (
      <div className="LeftContent">
        <video autoPlay loop>
          <source src={dog} type="video/mp4"/>
        </video>
      </div>
    )
  }
}

class SectionHeader extends Component {
  render() {
    let rightElement = null;
    console.log("this is the section -> " + this.props.section);
    if (this.props.section === "Blog") {
      rightElement = <h3>Archive</h3>;
    } else if ((this.props.section === "BlogPost") && (this.props.column === "left")) {
      rightElement = <BackButton section="Blog" onNavClick={this.props.onNavClick}/>;
    }
    return (
      <header className="SectionHeader">
        <h1>{this.props.title}</h1>
        {rightElement}
      </header>
    );
  }
}

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick(e) {
    this.props.onNavClick(this.props.section);
  }
  render() {
    return (
      <i className="fa fa-angle-left BlackIcon" aria-hidden="true"
          onClick={this.handleBackClick}/>
    )
  }
}

class MiddleContent extends Component {
  render() {
    const section = this.props.section;
    if (section === "BlogPost") {
      return <BlogPost section={section}/>;
    }
  }
}

class RightContent extends Component {  
  render() {
    const section = this.props.section;
    if (section === "BlogPost") {
      return <div/>;
    } else if (section === "Projects") {
      return <Projects section={section}/>;
    } else if (section === "About Me") {
      return <AboutMe section={section}/>;
    } else if (section === "Blog") {
      return <LatestBlogs section={section} onPostClick={this.props.onPostClick}/>
    }
  }
}

class LatestBlogs extends Component {
  render() {
    return (
      <div className="LatestBlogs">
          <SectionHeader title="Blog" section={this.props.section}/>
          <BlogTeaser title="Test 1" summary="A test blog post summary" date="14/02/2018" id="1"
            onPostClick={this.props.onPostClick} /> 
          <BlogTeaser title="Test 2" summary="A test blog post summary" date="14/02/2018" id="2"
            onPostClick={this.props.onPostClick} />  
          <BlogTeaser title="Test 3" summary="A test blog post summary" date="14/02/2018" id="3"
            onPostClick={this.props.onPostClick} />  
          <BlogTeaser title="Test 4" summary="A test blog post summary" date="14/02/2018" id="4"
            onPostClick={this.props.onPostClick} /> 
          <BlogTeaser title="Test 5" summary="A test blog post summary" date="14/02/2018" id="5"
            onPostClick={this.props.onPostClick} /> 
      </div>
    )
  }
}

class BlogTeaser extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onPostClick(this.props.id);
  }

  render() {
    return (
      <div className="BlogTeaser" onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        <p className="Summary">{this.props.summary}</p>
        <p className="Date">{this.props.date}</p>
      </div>
    );
  }
}

class BlogPost extends Component {
  render() {
    return (
      <div className="BlogPost" >
        <SectionHeader title="My First React Project" section={this.props.section}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a gravida augue. Maecenas et volutpat lacus, ut imperdiet felis. Proin sodales ultrices euismod. Vestibulum sollicitudin nisi id rhoncus rhoncus. Aenean scelerisque venenatis massa, a dignissim lacus aliquam vel. Praesent ut felis diam. Proin bibendum sapien in scelerisque dapibus. </p>
        <p>Donec pulvinar magna eget consequat mollis. Curabitur in egestas turpis. Sed pulvinar elit sit amet justo vehicula viverra. Donec porta elit sed erat ornare, ut condimentum nunc tincidunt. Nam blandit tincidunt pulvinar. Donec nec pellentesque dolor. In vitae ornare nisl. Sed interdum ut nulla eget commodo. Ut tincidunt lorem in ipsum auctor, sagittis porta enim tincidunt. Curabitur sed porttitor nunc. Nam sit amet faucibus metus. Cras a tortor volutpat, rutrum est quis, ultricies lacus. Nulla efficitur lacus quis sapien rutrum egestas. Duis est lectus, hendrerit sed ante in, vestibulum dignissim felis. Vivamus ultricies ligula neque, sed hendrerit est pretium et. </p>
        <p>Maecenas facilisis iaculis auctor. Aliquam viverra ornare orci vitae volutpat. In quis nibh et nisl scelerisque tristique. Nulla facilisi. Etiam ac sem vel nibh dictum faucibus vel at turpis. Nunc vel tempus elit, non viverra eros. Morbi eu maximus felis. Aenean nec lobortis diam. Aliquam et tellus vitae nisl tincidunt vulputate. Proin laoreet at purus in luctus. Aliquam id metus vehicula, volutpat nulla sed, dignissim metus. Vivamus sit amet congue neque. </p>
        <p>Pellentesque sollicitudin massa quis elit iaculis, elementum molestie leo sodales. Fusce blandit diam et nunc vestibulum elementum. In laoreet urna sit amet ultrices porta. Nunc eget massa eget augue ultricies lacinia interdum vitae lacus. Etiam lacinia dictum hendrerit. Aliquam et venenatis risus. Phasellus dapibus turpis odio, ac lobortis leo cursus eget. Sed placerat in velit a dignissim. Curabitur consectetur augue quis elit mollis, ac venenatis massa accumsan. Nulla nec molestie turpis, pulvinar iaculis ligula. Cras lorem libero, gravida mattis lorem sed, porttitor blandit nisl. Suspendisse efficitur lorem vitae tincidunt hendrerit. Sed eget lectus id est hendrerit vehicula quis ac lectus. Nam aliquam mauris vel nisi pellentesque faucibus. Aliquam laoreet semper augue nec venenatis. Proin consectetur nisl ut lorem dictum interdum. </p>
        <p>In vel tristique nibh. Cras eu augue ut neque auctor tempus. Nam volutpat arcu et mi tincidunt mollis. Vivamus sodales turpis eu ex porta pellentesque. Donec consequat, lectus sed volutpat eleifend, enim augue gravida nisl, sit amet faucibus justo arcu eu elit. Vivamus placerat nunc a est hendrerit, at bibendum purus malesuada. Fusce vehicula turpis et felis ultrices imperdiet. Proin rhoncus tortor vel suscipit tempus. Nam dictum a nibh nec fermentum. Nullam felis risus, pellentesque nec nunc sit amet, tempus pharetra ex. Ut gravida mauris odio, dapibus imperdiet tortor dapibus eu. Mauris pellentesque, est eget luctus ultricies, nulla mauris mattis elit, non tempus ex ante vel orci. Cras cursus consectetur massa quis blandit. Morbi a urna consectetur, venenatis leo eget, tempor nisi. </p>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <SectionHeader title="Projects" section={this.props.section}/>
        <ProjectSummary 
          title="WebScraper" 
          summary="The objective of this was to scrape relevant product information provided publically on a large retail website"
          skills="Python, HTML, Scrapy, Selenium">
        </ProjectSummary>
        <ProjectSummary 
          title="Text-Based Personality Questionaire Game" 
          summary="The objective of this was to scrape relevant product information provided publically on a large retail website"
          skills="HTML, CSS, JavaScript, PHP, MySQL">
        </ProjectSummary>
      </div>
    )
  }
}

class ProjectSummary extends Component {
  render() {
    return (
      <div className="ProjectSummary">
        <h2>{this.props.title}</h2>
        <p className="Summary">{this.props.summary}</p>
        <code className="Skills">{this.props.skills}</code>
      </div>
    )
  }
}

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <SectionHeader title="About Me" section={this.props.section}/>
        <h2>Background</h2>
          <p>blah blah blah</p>
        <h2>Interests</h2>
          <p>blah blah blah blah</p>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="Copyright">
          © Craig Harvey 2018 | <a href="https://github.com/charvei">Github</a> | <a>LinkedIn</a>
        </p>
      </footer>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.onNavClick = this.onNavClick.bind(this);
    this.onPostClick = this.onPostClick.bind(this);
    this.state = {section: "Blog", blogId : "0"};
    console.log(this.state.section);
  }

  onNavClick(buttonedSection) {
    this.setState({section : buttonedSection});
  }

  onPostClick(postId) {
    this.setState(
      {
        section : "BlogPost",
        blogId : postId
      })
  }

  render() {
    return (
      <div className="App">
        <AppHeaderBar onNavClick={this.onNavClick} />
        <MainBody section={this.state.section} onPostClick={this.onPostClick} onNavClick={this.onNavClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
