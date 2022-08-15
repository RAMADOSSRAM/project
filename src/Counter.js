import { useState } from 'react';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div>
      <button className='btn' onClick={() => setlike(like + 1)}> ❤️ {like}</button>
      {/* <p>{like}</p> */}
      <button onClick={() => setdislike(dislike + 1)}> 💔 {dislike}</button>
      {/* <p>{dislike}</p> */}

    </div>
  );
}
