import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/globe/32';
import Application32 from '@carbon/icons-react/lib/application/32';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">API Explorer V2.0</h1>
        </div>
      </div>

      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is API Explorer V2.0?
                    </h2>
                    <p className="landing-page__p">
                      IBM offers APIs to help you build a supply chain tailored
                      for your business. For API documentation, look at the
                      following API Explorer pages, and be sure to check out the
                      full directory. Quickly detect potential disruptions and
                      collaborate with colleagues and IBM Watson™ to resolve
                      issues.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`https://react-step-6--carbon-tutorial.netlify.com/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Add an API">
              {/* <div className="bx--grid bx--grid--no-gutter bx--grid--full-width"> */}
                <div className="bx--row landing-page__tab-content">
                
                <div class="bx--form-item">
                  <strong class="bx--file--label">Upload a swagger.yml file</strong>
                  <p class="bx--label-description">Only .yml file.</p>
                  <div class="bx--file" data-file>
                    <label for="your-file-importer-id-here" class="bx--file-btn bx--btn bx--btn--primary" role="button" tabindex="0">Add file</label>
                    <input type="file" class="bx--file-input" id="your-file-importer-id-here" data-file-uploader data-target="[data-file-container]" multiple />
                    <div data-file-container class="bx--file-container">
                    </div>
                  </div>
                </div>
                  
                </div>
              {/* </div> */}
            
            </Tab>
            <Tab {...props.tab} label="API Education">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Carbon provides styles and components in Vanilla, React,
                    Angular, and Vue for anyone building on the web.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <InfoSection heading="The Principles" className="landing-page__r3">
        <InfoCard
          heading="API Creation"
          body="Create your own customized APIs and host on API Explorer with the help of API Education tutorials."
          icon={<PersonFavorite32 />}
        />
        <InfoCard
          heading="API Management"
          body="Manage APIs created by you, know the number of users for your API. Manage the APIs subscribed by you."
          icon={<Application32 />}
        />
        <InfoCard
          heading="API Usage"
          body="Understand how to subscribe and use an API already available in API Explorer Directory."
          icon={<Globe32 />}
        />
      </InfoSection>
    </div>
  );
};
export default LandingPage;
