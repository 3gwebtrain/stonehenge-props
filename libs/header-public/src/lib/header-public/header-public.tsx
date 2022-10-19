import { HeaderLinkProps } from '@stonehenge/prop-types';
import { Col, Row } from 'antd';
import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navStyle from './header-public.module.scss';

export function HeaderPublic({
  schema,
  popInit,
}: {
  schema: HeaderLinkProps[];
  popInit: () => void;
}): ReactElement {
  const [newSchema, setNewSchema] = useState<HeaderLinkProps[]>();

  useEffect(() => {
    setNewSchema(schema);
  }, [schema]);

  return (
    <nav className={navStyle['app-nav']}>
      <Row justify="space-between">
        <Col lg={12} md={12} sm={24}>
          <h1>Public header</h1>
        </Col>
        <Col lg={12} md={12} sm={24}>
          <Row align="middle" justify="end">
            {newSchema &&
              newSchema.map((navItem) => {
                if (navItem.type && navItem.type === 'link') {
                  return (
                    <Col
                      key={navItem.name}
                      lg={2}
                      md={2}
                      xs={24}
                      style={{ border: '1px solid red' }}
                    >
                      <Link to={navItem.link || ''}>{navItem.name}</Link>
                    </Col>
                  );
                }
                return (
                  <button key={navItem.name} onClick={() => popInit()}>
                    {navItem.name}
                  </button>
                );
              })}
          </Row>
        </Col>
      </Row>
    </nav>
  );
}

export default HeaderPublic;
