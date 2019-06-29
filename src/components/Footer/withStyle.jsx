import styled from 'styled-components';

export default (component) => styled(component)`
    
        padding: 80px 150px 50px 150px;
        background: #fff;
        color: #767676;
        border-top: .5px solid #F4F4F4;
        font-family: sans-serif;
    
    .footer-column {
        float: left;
        padding-right: 50px;
        width: calc(100%/4);
    }
    .footer-column h4 {
        display: block;
        padding-bottom: 15px;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.2;
        color: #484848;
    }
    
    .link {
        margin-bottom: 4px;
        font-size: 15px ;
    }
    
    .link:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    
    .icon {
        height: 18px;
        width: 18px;
        padding: 0 20px;
        display: inline-block;
        color: #767676;
        background: url("img/facebook-logo.svg") center center / 18px 18px no-repeat;
    }
    
    .social-icons {
      margin-bottom: 10px;
    }
    
    .twitter-icon {
        background-image: url("img/twitter.svg");
    }
    
    .insta-icon {
        background-image: url("img/instagram-logo.svg");
    }
    
    .clear-fix {
        clear: both;
    }
    
    .footer-copyright {
        width: 100%;
        height: 80px;
    }
    
    .footer-copyright {
      line-height: 1;
    }
    .footer-copyright::before {
        content: '';
        display: block;
        width: 100%;
        margin: 20px auto;
        height: 1px;
        background: #F4F4F4;
    }
    
    .copyright-text::before {
        content: '';
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
        transform: translateY(-1px);
        width: 20px;
        height: 20px;
        background: url("img/airbnb.svg") center center / 20px 20px no-repeat;
    }
`;
