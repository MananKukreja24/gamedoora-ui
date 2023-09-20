import Signupform from '@/app/components/Signupform';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      marginRight: "auto", background:
        "#DAD5D5"
    }}>
      

      <Signupform>
        <div style={{ textDecoration: "underline",marginRight:"330px" }}>
          Already have an account?{' '}
          <Link href="/login" >Log in</Link>
        </div>
      </Signupform>
    </div>
   
  );
}
