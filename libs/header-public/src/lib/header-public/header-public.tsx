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
      <Row>
        <Col lg={12}>
          <h1>Public header</h1>
        </Col>
        <Col lg={12}>
          <ul className="navi-links">
            {newSchema &&
              newSchema.map((navItem) => {
                if (navItem.type && navItem.type === 'link') {
                  return (
                    <li key={navItem.name}>
                      <Link to={navItem.link || ''}>{navItem.name}</Link>
                    </li>
                  );
                }
                return (
                  <button key={navItem.name} onClick={() => popInit()}>
                    {navItem.name}
                  </button>
                );
              })}
          </ul>
        </Col>
      </Row>
    </nav>
  );
}

export default HeaderPublic;
