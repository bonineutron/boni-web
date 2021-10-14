import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import PageExperience from "../components/PageExperience";
import PageProfile from "../components/PageProfile";
import Topbar from "../components/Topbar";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boni Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <PageProfile
                  moveSection={() => fullpageApi.moveSectionDown()}
                  btnLabel="Preciona para bajar"
                  title="TITULO 1"
                  pImg="/profile-pict.jpg"
                />
              </div>
              <div className="section">
                <PageExperience
                  moveSection={() => fullpageApi.moveSectionDown()}
                  btnLabel="Preciona para bajar"
                  title="TITULO 1"
                  pImg="/profile-picture.png"
                />
              </div>
              <div className="section">
                <PageExperience
                  moveSection={() => fullpageApi.moveSectionDown()}
                  btnLabel="Preciona para bajar"
                  title="TITULO 2"
                />
              </div>
              <div className="section">
                <PageExperience
                  moveSection={() => fullpageApi.moveSectionUp()}
                  btnLabel="Preciona para subir"
                  title="TITULO 3"
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
