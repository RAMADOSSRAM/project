import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div>
      <IconButton className='btn' onClick={() => setlike(like + 1)} aria-label="like">
      <Badge badgeContent={like} color="primary">
      ❤️
    </Badge>
      </IconButton>
      <IconButton className='btn' onClick={() => setdislike(dislike + 1)} aria-label="dislike">
      <Badge badgeContent={dislike} color="error">
      💔
    </Badge>
      </IconButton>
    </div>
  );
}
