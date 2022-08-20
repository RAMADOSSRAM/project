import { Msg } from "./Msg";

export function Page() {
  const users = [
    {
      name: "AJITH",
      pic: "https://th.bing.com/th/id/R.33d02c67b4a6e90abe2d7a58f764edd8?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fwww.thewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=KAqZpO4yRo6V5YA75CVrNPO1UNoFiHpznXqWnLl2ex4%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "RAMADOSS",
      pic: "https://th.bing.com/th/id/OIP.fBYQQAMqYDFxOh5dWobzLgHaFj?pid=ImgDet&rs=1"
    },
    {
      name: "RAM",
      pic: "https://th.bing.com/th/id/OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8?pid=ImgDet&rs=1"
    }
  ];
  return (
    <div>
      {users.map((users) => (
        <Msg name={users.name} pic={users.pic} />
      ))}
    </div>
  );
}
