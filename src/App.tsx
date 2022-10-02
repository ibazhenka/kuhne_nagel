import React from 'react';
import { css } from '@emotion/css';
import { Card, Main, H1, Subtitle } from './components';

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
        }}
        >
          <header style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <H1>Create Demand</H1>
            <Subtitle>Search the product you need here. Use tags to find any alternative.</Subtitle>
          </header>
          <nav style={{ display: 'flex', marginTop: 36 }}>
            <div className={css`
              font-size: 14px;
              font-weight: 500;
              line-height: 16px;
              color: var(--primary-color);
              padding: 16px 24px 14px;
              border-bottom: 2px solid var(--primary-color);
            `}
            >1 Product
            </div>
            <div className={css`
              font-size: 14px;
              font-weight: 500;
              line-height: 16px;
              color: var(--secondary-color);
              padding: 16px 24px 14px;
              border-bottom: 2px solid var(--secondary-color);
            `}
            >2 Addresses
            </div>
            <div className={css`
              font-size: 14px;
              font-weight: 500;
              line-height: 16px;
              color: var(--secondary-color);
              padding: 16px 24px 14px;
              border-bottom: 2px solid var(--secondary-color);
            `}
            >3 Overview
            </div>
          </nav>
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
                <h2 className={css`
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 20px;
                  padding: 17px 24px;
                `}
                >
                  I’m looking for...
                </h2>
                <hr className={css`
                  height: 1px;
                  background-color: var(--divider-color);
                `}
                />
                <div className={css`display: flex;
                  flex-direction: column;
                  gap: 20px;
                  padding: 32px 24px`}
                >
                  <div>
                    <div className={css`display: flex;
                      align-items: center`}
                    >
                      <input type="checkbox" />
                      <label className={css`
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                        color: var(--secondary-text-color)
                      `}
                      >123
                      </label>
                    </div>
                  </div>
                  <input
                    type="search"
                    className={css`background: var(--input-background-color);
                      border: 1px solid var(--input-border-color);
                      padding: 8px 8px 8px 40px;
                      border-radius: 2px;
                    `}
                  />
                </div>
              </Card>
              <div>
                <Card className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 32px 14px 24px'
                })}
                >
                  <div>
                    <h2 className={css`
                      font-size: 16px;
                      font-weight: 500;
                      line-height: 20px;
                    `}
                    >
                      123
                    </h2>
                    <div className={css`
                      margin-top: 24px
                    `}
                    >
                      <div className={css`
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 14px;
                        padding: 5px 10px;
                        border-radius: 4px;
                        color: var(--primary-color);
                        background: var(--primary-opacity-15);
                      `}
                      >Tab
                      </div>
                    </div>
                  </div>
                  <Subtitle>some text</Subtitle>
                </Card>
              </div>
            </div>
            <aside className={css`width: 320px;
              flex-shrink: 0`}
            >
              <Card>
                <h2 className={css`
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 20px;
                  padding: 17px 24px;
                `}
                >
                  Product Details
                </h2>
                <hr className={css`
                  height: 1px;
                  background-color: var(--divider-color);
                `}
                />
                <div className={css`padding: 42px 24px 24px`}>
                  <h2 className={css`
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 20px;
                  `}
                  >123
                  </h2>
                  <div className={css`margin-top: 24px`}>
                    <div className={css`
                      font-size: 12px;
                      font-weight: 500;
                      line-height: 14px;
                      padding: 5px 10px;
                      border-radius: 4px;
                      color: var(--primary-color);
                      background: var(--primary-opacity-15);
                    `}
                    >
                      Tab
                    </div>
                  </div>
                  <button
                    className={css`margin-top: 24px;
                      padding: 8px 16px;
                      font-size: 14px;
                      font-weight: 500;
                      line-height: 16px;
                      background: var(--primary-color);
                      border-radius: 4px;
                      color: var(--on-primary-contrast)
                    `}
                    type="button"
                  >Go to Manufacturer
                  </button>
                  <p className={css`
                    margin-top: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;`}
                  >Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow authors to
                    update their documents themselves.
                  </p>
                  <div className={css`margin-top: 32px;`}>
                    <input type="radio" />
                    <label className={css`margin-top: 8px;
                      font-size: 14px;
                      font-weight: 500;
                      line-height: 20px;
                      color: var(--secondary-text-color);
                    `}
                    >Option 1
                    </label>
                  </div>
                  <p className={css`
                    margin-top: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;`}
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className={css`margin-top: 32px;`}>
                    <input type="radio" />
                    <label className={css`margin-top: 8px;
                      font-size: 14px;
                      font-weight: 500;
                      line-height: 20px;
                      color: var(--secondary-text-color);
                    `}
                    >Option 2
                    </label>
                  </div>
                  <p className={css`
                    margin-top: 8px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;`}
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
