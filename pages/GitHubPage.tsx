import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useSearchUsersQuery } from '../store/github/github.api';

const GitHubPage: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string | undefined>();
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const { data, isSuccess } = useSearchUsersQuery(searchValue);

  const canShowResults = isSuccess && data?.items?.length;

  const searchUsersHandler = () => {
    setSearchValue(searchInputValue);
  };

  const clearSearchValuesHandler = () => {
    setSearchInputValue(undefined);
    setSearchValue(undefined);
  };

  return (
    <>
      <div className="flex justify-between items-center text-white">
        <h1 className="text-xl">Поиск пользователей в Github</h1>
        <div>
          <div className="flex overflow-hidden rounded-md w-min">
            <Input.Base
              className="text-black p-1 outline-none flex-1 h-full"
              id="search"
              onChange={(value) => setSearchInputValue(value)}
              placeholder="имя пользователя"
              value={searchInputValue || ''}
            />
            <Button.Base
              className="p-2 bg-purple-400"
              onClick={searchUsersHandler}
              title="Поиск"
            />
            <Button.Base
              className="p-2 bg-purple-500"
              onClick={clearSearchValuesHandler}
              title=" Очистить"
            />
          </div>
        </div>
      </div>
      {data?.total_count && <h1 className="text-white">{`найдено: ${data.total_count} пользователей`}</h1>}
      <div className="grid grid-cols-3 gap-4 mt-4 overflow-y-auto">
        {
          canShowResults
            ? data.items.map((user) => (
              <div
                key={user.id}
                className="
              flex p-2 bg-green-400 rounded-sm
              hover:scale-105 transition-all gap-2
              shadow-[0px_0px_3px] shadow-green-200
              "
              >
                <div className="flex flex-col">
                  <div className="font-bold w-min box-border">{user.login}</div>
                  <img
                    alt="avatar"
                    className="w-[100px]"
                    src={user.avatar_url}
                  />
                </div>
                <div>
                  <div className="font-bold">Информация</div>
                  <div>
                    ID:
                    {' '}
                    { user.id }
                  </div>
                  <div>{user.type}</div>
                </div>
              </div>
            ))
            : <div>Ничего не найдено</div>
        }
      </div>
    </>
  );
};

export default GitHubPage;
