import React from 'react';

const Login: React.FC = () => (
  <div className="flex flex-col bg-slate-500">
    <input type="text" />
    <input type="password" />
  </div>
);

export default React.memo(Login);
