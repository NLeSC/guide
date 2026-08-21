# Rust

_Page maintainer: [Rodrigo V. Honorato](https://github.com/rvhonorato)_

Rust is a modern programming language designed to provide both high performance while enforcing memory safety through its unique ownership system and borrow checker. Originally developed at Mozilla and first released in 2015, Rust is now stewarded by the independent [Rust Foundation](https://rustfoundation.org/) (founded 2021 by AWS, Google, Huawei, Microsoft and Mozilla).
Rust has rapidly gained popularity for its ability to prevent common programming errors at compile time. 
It is commonly categorized as a systems programming language but over the last few years its ecosystem has grown considerably and Rust is being adopted as a general programming language.

Rust is increasingly adopted in **research software** for its unique blend of
speed, safety, and modern tooling. It powers everything from
high-throughput DNA sequencing pipelines to climate simulations, where even
minor memory errors could invalidate results. By eliminating entire classes
of bugs (e.g., null pointers, race conditions, type mismatches), Rust lets
researchers focus on science, not on debugging.

It is however a **low-level** language, which gives you direct control over
hardware and memory (like [C/C++](./ccpp.md)). For comparison, [Python](./python.md)
is a **high-level** language that prioritizes readability by abstracting these
details - in Python you don't ever need to think about allocating or freeing
memory as the interpreter takes care of it, making the code slower but much
easier to program. In a **low-level** language you need to manage it yourself.
Because Rust runs "closer to the metal", it achieves blazing-fast performance -
similar to [C/C++](./ccpp.md) while avoiding common memory-safety and
concurrency bugs.

Here are some of Rust's key characteristics:

- **Memory Safety**: Rust's unique ownership system guarantees memory safety at compile
  time, eliminating crashes from null pointers, dangling references, or leaks.

- **Type Safety**: Strict compile-time checks ensure variables, data types,
  and operations are error-free, so there will be no surprises at runtime.

- **Zero-Cost Abstractions**: High-level syntax (e.g., iterators, traits) compiles
  to machine code as efficiently as hand-written low-level code.

- **Fearless Concurrency**: Built-in rules prevent data races, letting you
  write safe, parallel code without runtime crashes.

- **Expressive Enums & Pattern Matching**: Enums can hold data, and match
  ensures all cases are handled—no forgotten edge cases.

- **Traits for Polymorphism**: Define shared behavior across types without
  runtime overhead.

- **Rich Ecosystem**: Tools like [Cargo](https://doc.rust-lang.org/cargo/)
  (package manager), [Clippy](https://doc.rust-lang.org/stable/clippy/usage.html)
  (linting), [crates.io](https://crates.io) (libraries)
  and [rustdoc](https://doc.rust-lang.org/stable/rustdoc/) (documentation)
  streamline development.

```rust
// Ownership in action: the compiler tracks who "owns" data.
fn main() {
    // Lets declare a string, here `s` owns it
    let s = String::from("hello");

    // Borrow `s` as a read-only reference (no ownership transference)
    let len = calculate_length(&s);

    // `s` still owns the data and we can use it
    println!("'{}' has length {}", s, len);
}

fn calculate_length(s: &str) -> usize {
    s.len()
}
```

## Getting started

To get started you will first need to install Rust, this can be done via [`rustup`](https://rustup.rs)
which is a command line tool for managing Rust versions and tools.

On Linux/MacOs:

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

On Windows, [see the instructions here](https://forge.rust-lang.org/infra/other-installation-methods.html#other-ways-to-install-rustup).

Cargo is Rust's build system and package manager and is installed by `rustup`.
You can use it to create a project:

```bash
cargo new rust_project
```

This will create the project folder structure, add a `Cargo.toml` and a `src/main.rs`
which contains a placeholder "Hello world", so you can already build this
`rust_project`

```bash
cd rust_project
cargo build --release # using --release will build the optimized binary
./target/release/rust_project # execute the binary
```

Once inside `rust_project`, there are a few commands you will use frequently: `run`, `fmt`, `test` and `clippy`.

- `cargo run`: build and run (this is meant for debugging, not final release)
- `cargo test` run unit and doc tests
- `cargo fmt`: auto-format the code
- `cargo clippy`: check for common mistakes and non-idiomatic code

Cargo will keep track of two files: `Cargo.toml`, where you declare dependencies and metadata, and `Cargo.lock`, the resolved, exact dependency tree.

You may commit both to version control; for a library, `Cargo.lock` is usually left out of version control so downstream users resolve their own compatible versions.

## Testing

Rust has a test runner built into Cargo, and unit tests can live next to the code they test, inside a `#[cfg(test)]` module definition:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_adds() {
        let observed = add(2, 2);
        let expected = 4;
        assert_eq!(observed, expected);
    }
}
```

Run the tests with `cargo test`.

## Coding style and code quality

- [`rustfmt`](https://github.com/rust-lang/rustfmt) (`cargo fmt`) is the standard formatter and ships with `rustup`.
- [`clippy`](https://doc.rust-lang.org/stable/clippy/) (`cargo clippy`) is the standard linter and catches both bugs and non-idiomatic patterns that the compiler itself won't flag.

## Recommended additional packages and libraries

- [`serde`](https://serde.rs): a widely used (de)serialization framework (JSON, YAML, TOML, ...).
- [`clap`](https://docs.rs/clap): command-line argument parsing.
- [`tokio`](https://tokio.rs): most common async runtime, needed for networked or otherwise concurrent I/O-bound code.
- [`rayon`](https://docs.rs/rayon): trivially parallelize existing iterator-based code across CPU cores.
- [`ndarray`](https://docs.rs/ndarray): n-dimensional arrays for numerical/scientific computing, roughly Rust's equivalent of NumPy.

## Learning

Its unique approach to memory management (ownership, borrowing and lifetimes) and the strict compiler can feel daunting at first - especially if you are accustomed to high-level languages like [python](./python.md) or [javascript](./javascript.md).
Learning Rust can be challenging as some new concepts, such as the borrow checker, may take time to be internalized.

> Keep in mind that in the long run all the effort pays off. The code produced
> will be faster while having _fewer bugs_ (thanks to the opinionated compiler),
> you will learn _transferable skills_ that will make you a better programmer
> in other languages. The general mindset should be **start small and embrace
> the compiler**.

To learn it, you only need:

- [The Rust Book](https://doc.rust-lang.org/book/): This
  is the official book and it is very well written and easy to follow. It contains
  all the information you need to gain a deep understanding of Rust. It contains
  a fully guided tutorial on how to write a Guessing game as your first project.
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/): This contains
  smaller examples of how to use the language, and it is a good complement to
  the book or when you need to quickly look up how to do something.
- [Rustlings](https://rustlings.cool): Fully interactive exercises
  that will help you get used to the syntax and the concepts of the language -
  it is paired with the book, so you should be doing the exercises as you go
  through the book.
- [Rust Playground](https://play.rust-lang.org/): Lets you experiment with Rust
  online in your browser

🦀
