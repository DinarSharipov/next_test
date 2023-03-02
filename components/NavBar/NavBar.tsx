import React from 'react';
import Button from '../Button';

const NavBar: React.FC = () => (
  <div className="flex-1 items-center p-4 bg-blue-600">
    <div className="flex items-center">
      <div>Logo</div>
      <div>
        <ul className="flex items-center gap-2">
          <Button.Link
            href="/"
            title="Ссылка 1"
          />
          <Button.Link
            href="/GitHubPage"
            title="GitHubPage"
          />
        </ul>
      </div>
    </div>
  </div>
);

export default React.memo(NavBar);
