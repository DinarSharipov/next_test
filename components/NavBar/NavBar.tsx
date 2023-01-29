import React from 'react';
import Button from '../Button';

const NavBar: React.FC = () => (
  <div className="flex-1 items-center p-2">
    <div className="flex items-center">
      <div>Logo</div>
      <div>
        <ul className="flex items-center">
          <Button.Link
            href="/"
            title="Ссылка 1"
          />
          <Button.Link
            href="Viewer"
            title="ЗВА"
          />
          <Button.Link
            href="/"
            title="Ссылка 1"
          />
          <Button.Link
            href="/"
            title="Ссылка 1"
          />
          <Button.Link
            href="/Table"
            title="Таблица"
          />
        </ul>
      </div>
    </div>
  </div>
);

export default React.memo(NavBar);
