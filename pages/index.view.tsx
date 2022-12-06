import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IndexView() {
  const router = useRouter()

  useEffect(() => {
    router.push("/home")
  }, [])
}
