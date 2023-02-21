import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import axios from 'axios';
import dayjs from 'dayjs';
import Markdown from '../../libs/markdown';
import clsx from 'clsx';

type RepoKey =
  | 'frouriojs/frourio'
  | 'frouriojs/frourio-express'
  | 'frouriojs/create-frourio-app'
  | 'aspida/aspida';

export type Props = {
  repo: RepoKey;
};

const ITEMS_PER_PAGE = 5;

const PagenatedReleases: React.FC<Props> = ({ repo }) => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const _f = async () => {
      const res = await axios.get<Release[]>(
        `https://api.github.com/repos/${repo}/releases?per_page=50`
      );
      setReleases(res.data);
    };
    _f();
  }, [setReleases]);

  return (
    <div id="pagenatedReleases">
      {releases
        .slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
        .map((release, i) => (
          <Release release={release} key={i} />
        ))}
      <ReactPaginate
        forcePage={currentPage}
        pageCount={Math.ceil(releases.length / ITEMS_PER_PAGE)}
        pageRangeDisplayed={window.innerWidth >= 600 ? 4 : 2}
        marginPagesDisplayed={window.innerWidth >= 600 ? 2 : 1}
        onPageChange={({ selected }) => {
          setCurrentPage(selected);
          window.scroll({ top: 250, behavior: 'smooth' });
        }}
        containerClassName={clsx('pagination', styles.pagenation)}
        pageClassName="pagination__item"
        activeClassName="pagination__item--active"
        previousClassName="pagination__item"
        nextClassName="pagination__item"
        breakClassName="pagination__item"
        pageLinkClassName="pagination__link"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        breakLinkClassName={styles.breakLink}
        disabledClassName="disabled"
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
      />
    </div>
  );
};

export default PagenatedReleases;

interface Release {
  url: string;
  html_url: string;
  id: string;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
}

const Release: React.FC<{ release: Release }> = ({ release }) => {
  return (
    <article className={styles.release}>
      <div className={styles.leftBox}>
        <h2 className={styles.version}>
          <Link href={release.html_url}>{release.name}</Link>
        </h2>
        <span className={styles.date}>{dayjs(release.created_at).format('YYYY.MM.DD')}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: Markdown.render(release.body),
        }}
      />
    </article>
  );
};
