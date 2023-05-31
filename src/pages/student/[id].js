import { useRouter } from "next/router";

function AboutUs() {
  const router = useRouter();
  const param = router.query.id;
  console.log(param);
  return <h1>INI FSW 3 {param}</h1>;
}

export default AboutUs;