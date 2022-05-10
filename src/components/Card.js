import React, { useMemo } from 'react';
import CopyButton from './CopyButton';
import { replaceString } from '../services/utils';
function Card({ command, params }) {
  const commandString = useMemo(() => {
    return replaceString(command.command, params);
  }, [command, params]);
  return (
    <div className="d-flex text-muted pt-3">
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="overflow-auto text-gray-dark w-75">
            <pre>{commandString}</pre>
          </strong>
        </div>
        <span className="d-block mt-2 text-capitalize">{command.name}</span>
        <small className="text-capitalize">{command.description}</small>
      </div>
      <CopyButton text={commandString} />
    </div>
  );
}

export default Card;
