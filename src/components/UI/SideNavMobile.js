import classes from './SideNavMobile.module.css'

const SideNavMobile = (props) => {


  return (
    <>
      <div className={classes.containerLeft} >
        <div>
          <div className={classes.SideNavHeaders}>
            <button
              className={classes.btnSideNav}
              onClick={props.onAboutMeClicked}
              onTouchStart={props.onAboutMeClicked}
            >
            
              About Me
            </button>
          </div>
          <div className={classes.SideNavHeaders}>
            <button
              className={classes.btnSideNav}
              onClick={props.onEducationClicked}
              onTouchStart={props.onEducationClicked}
            >
              Education
            </button>
          </div>
          <div className={classes.SideNavHeaders}>
            <button
              className={classes.btnSideNav}
              onClick={props.onSkillClicked}
              onTouchStart={props.onSkillClicked}
            >
              Skills
            </button>
          </div>
          <div className={classes.SideNavHeaders}>
            <button
              className={classes.btnSideNav}
              onClick={props.onResumeClicked}
              onTouchStart={props.onResumeClicked}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavMobile;