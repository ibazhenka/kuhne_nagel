import React from 'react';
import { Card, Main, Subtitle, Divider } from './components';
import { Tabs } from './Tabs/Tabs';
import { Checkbox } from './Checkbox/Checkbox';
import { Chip } from './Chip/Chip';
import { Button } from './Button/Button';
import { RadioButton } from './RadioButton/RadioButton';

function App() {
  return (
    <Main>
      <section style={{ display: 'flex', gap: 16 }}>
        <aside style={{ width: 320, maxWidth: '100%' }} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
          minWidth: 800,
        }}
        >
          <header style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h1 className="Typography-h1">Create Demand</h1>
            <p className="Typography-subtitle" style={{ color: 'var(--secondary-text-color)' }}>Search the product you
              need here. Use tags to find any alternative.
            </p>
          </header>
          <Tabs />
          <div style={{
            display: 'flex',
            gap: 16,
            marginTop: 24,
          }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              flexGrow: 1,
            }}
            >
              <Card>
                <h2 className="Typography-h2 Card-title">
                  I’m looking for...
                </h2>
                <Divider />
                <div className="Card-content">
                  <div>
                    <Checkbox label="Software Development" />
                  </div>
                  <input
                    type="search"
                    className="Search-input"
                  />
                </div>
              </Card>
              <div>
                <Card className="ResultItem-card">
                  <div>
                    <h2 className="Typography-h2">
                      123
                    </h2>
                    <div style={{ marginTop: 24 }}>
                      <Chip label="Tab" />
                    </div>
                  </div>
                  <Subtitle>some text</Subtitle>
                </Card>
              </div>
            </div>
            <aside style={{
              width: 320,
              flexShrink: 0
            }}
            >
              <Card>
                <h2 className="Typography-h2 Card-title">
                  Product Details
                </h2>
                <Divider />
                <div style={{ padding: '42px 24px 24px' }}>
                  <h2 className="Typography-h2">123
                  </h2>
                  <div style={{ marginTop: 24 }}>
                    <Chip label="Tab" />
                  </div>
                  <Button>
                    Go to Manufacturer
                  </Button>
                  <p className="Typography-body1" style={{ marginTop: 8 }}>
                    Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow authors to
                    update their documents themselves.
                  </p>
                  <RadioButton label="Option 1" />
                  <p className="Typography-body1" style={{ marginTop: 8 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <RadioButton label="Option 2" />
                  <p className="Typography-body1" style={{ marginTop: 8 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default App;
