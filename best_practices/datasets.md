# Working with tabular data

*Page maintainers: Suvayu Ali* [@suvayu](https://github.com/suvayu) *, Flavio Hafner* [@f-hafner](https://github.com/f-hafner) *and Reggie Cushing* [@recap](https://github.com/recap)

There are several solutions available to you as an RSE, with their own pros and cons.  You should evaluate which one works best for your project, and project partners, and pick one.  Sometimes it might be, that you need to combine two different types of technologies.  Here are some examples from our experience.

You will encounter datasets in various file formats like:
- CSV/Excel
- Parquet
- HDF5/NetCDF
- JSON/JSON-LD

Or local database files like SQLite.  It is important to note, the various trade-offs between these formats.  For instance, doing a random seek is difficult with a large dataset for non-binary formats like: CSV, Excel, or JSON.  In such cases you should consider formats like Parquet, or HDF5/NetCDF.  Non-binary files can also be imported into local databases like SQLite or DuckDB.  Below we compare some options to work with datasets in these formats.

It's also good to know about [Apache Arrow](https://arrow.apache.org), which is not itself a file format, but a specification for a memory layout of (binary) data.
There is an ecosystem of libraries for all major languages to handle data in this format.
It is used as the back-end of [many data handling projects](https://arrow.apache.org/powered_by/), among which a few others mentioned in this chapter.

## Local database

When you have a relational dataset, it is recommended that you use a database.  Using local databases like SQLite and DuckDB can be very easy because of no setup requirements. But they come with some some limitations; for instance, multiple users cannot write to the database simultaneously.

SQLite is a transactional database, so if you have a dataset that is changing with time (e.g. you are adding new rows), it would be more appropriate.  However in research often we work with static databases, and are interested mostly in analytical tasks.  For such a case, DuckDB is a more appropriate alternative.  Between the two,
- DuckDB can also create views (virtual tables) from other sources like files, other databases, but with SQLite you always have to import the data before running any queries.
- DuckDB is multi-threaded. This can be an advantage for large databases, where aggregation queries tend to be faster than sqlite.
   - However if you have a really large dataset, say 100Ms of rows, and want to perform a deeply nested query, it would require substantial amount of memory, making it unfeasible to run on personal laptops.
   - There are options to customize memory handling, and push what is possible on a single machine.

     You need to limit the memory usage to prevent the operatings system, or shell from preemptively killing it.  You can choose a value about 50% of your system's RAM.
	 ```sql
	 SET memory_limit = '5GB';
	 ```
	 By default, DuckDB spills over to disk when memory usage grows beyond the above limit.  You can verify the temporary directory by running:
	 ```sql
	 SELECT current_setting('temp_directory') AS temp_directory;
	 ```
	 Note, if your query is deeply nested, you should have sufficient disk space for DuckDB to use; e.g. for 4 nested levels of `INNER JOIN` combined with a `GROUP BY`, we observed a disk spill over of 30x the original dataset.  However we found this was not always reliable.

	 In this kind of borderline cases, it might be possible to address the limitation by splitting the workload into chunks, and aggregating later, or by considering one of the alternatives mentioned below.
   - You can also optimize the queries for DuckDB, but that requires a deeper dive into the documentation, and understanding how DuckDB query optimisation works.
- Both databases support setting (unique) indexes. Indexes are useful and sometimes necessary
   - For both DuckDB and SQLite, unique indexes allow to ensure data integrity
   - For SQLite, indexes are crucial to improve the performance of queries. However, having more indexes makes writing new records to the database slower. So it's again a trade-off between query and write speed.

# Useful libraries

## Database APIs

- [SQLAlchemy](https://www.sqlalchemy.org/)
   - In Python, interfacing to SQL databases like SQLite, MySQL or PostgreSQL is often done using [SQLAlchemy](https://www.sqlalchemy.org/), which is an Object Relational Mapper (ORM) that allows you to map tables to Python classes. Note that you still need to use a lot of manual SQL outside of Python to manage the database. However, SQLAlchemy allows you to use the data in a Pythonic way once you have the database layout figured out.

## Data processing libraries on a single machine
- Pandas
   - The standard tool for working with dataframes, and widely used in analytics or machine learning workflows.  Note however how Pandas uses memory, because certain APIs create copies, while others do not.  So if you are chaining multiple operations, it is preferable to use APIs that avoid copies.
- Vaex
   - Vaex is an alternative that focuses on out-of-core processing (larger than memory), and has some lazy evaluation capabilities.
- Polars
   - An alternative to Pandas (started in 2020), which is primarily written in Rust.  Compared to pandas, it is multi-threaded and does lazy evaluation with query optimisation, so much more performant.  However since it is newer, documentation is not as complete.  It also allows you to write your own custom extensions in Rust.
- [Apache Datafusion](https://datafusion.apache.org/)
   - A very fast, extensible query engine for building high-quality data-centric systems in [Rust](http://rustlang.org/), using the [Apache Arrow](https://arrow.apache.org/) in-memory format. DataFusion offers SQL and Dataframe APIs, excellent [performance](https://benchmark.clickhouse.com/), built-in support for CSV, Parquet, JSON, and Avro, extensive customization, and a great community.

## Distributed/multi-node data processing libraries
- Dask
   - `dask.dataframe` and `dask.array` provides the same API as pandas and numpy respectively, making it easy to switch.
   - When working with multiple nodes, it requires communication across nodes (which is network bound).
- Ray
- Apache Spark
