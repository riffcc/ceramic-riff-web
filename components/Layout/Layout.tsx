import { useQuery } from "@apollo/client";
import { ReactNode } from "react";
import {  GET_WEBSITE_DATA, websiteDataQueryParams } from "../../utils/constants";
import Header from "./Header";
import Spinner from "./Spinner";

export default function Layout({ children }: { children: ReactNode }) {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { loading: loadingWebsiteData, error } = useQuery(GET_WEBSITE_DATA, {
    variables: {
      id: websiteID!,
      ...websiteDataQueryParams
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-black text-slate-50">
      {loadingWebsiteData ?
        <Spinner className='h-10 w-10 animate-spin text-slate-200 m-auto' /> :
        error ?
          <p className='m-auto text-red-400 text-xl font-bold'>Error to fetch content.</p> :
          <>
            <Header />
            {children}
          </>
      }
    </div>
  )
}
