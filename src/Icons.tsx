/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import user from './user.svg';

export const UserIcon = () => (
  <img
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
    src={user}
    alt="User"
    width="12px"
  ></img>
);
