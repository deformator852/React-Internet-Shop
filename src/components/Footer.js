import React from 'react';
import { FaGithub,FaLinkedin} from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (<footer>
      <div className="info">
       <div className="info-inner">
          <p className="about">About company</p>
          <p className="fiverr"><a target="_blank" href="https://www.fiverr.com/deformator23">fiverr</a></p>
          <p className="upwork"><a target="_blank" href="https://www.upwork.com/freelancers/~01bedda0bee2f4536e">upwork</a></p>
          <div className="contacts">
            <a target="_blank" href="https://github.com/deformator852"><p id="github"><FaGithub size="30px"/></p></a>
            <a target="_blank" href="https://www.linkedin.com/in/%D0%BD%D1%96%D0%BA%D1%96%D1%82%D0%B0-%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE-3a8a93279/">
              <p id="linkedin"><FaLinkedin size="30px" /></p>
            </a>

          </div>
        </div> 
      </div>
    </footer>)
  }
}

export default Footer
