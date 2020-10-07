(function() {var implementors = {};
implementors["tiberius"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/struct.Client.html\" title=\"struct tiberius::Client\">Client</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tiberius::client::Client"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/struct.Config.html\" title=\"struct tiberius::Config\">Config</a>","synthetic":true,"types":["tiberius::client::config::Config"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/struct.QueryResult.html\" title=\"struct tiberius::QueryResult\">QueryResult</a>&lt;'a&gt;","synthetic":true,"types":["tiberius::result::QueryResult"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/struct.ExecuteResult.html\" title=\"struct tiberius::ExecuteResult\">ExecuteResult</a>","synthetic":true,"types":["tiberius::result::ExecuteResult"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/struct.Column.html\" title=\"struct tiberius::Column\">Column</a>","synthetic":true,"types":["tiberius::row::Column"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/struct.Row.html\" title=\"struct tiberius::Row\">Row</a>","synthetic":true,"types":["tiberius::row::Row"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tiberius/enum.AuthMethod.html\" title=\"enum tiberius::AuthMethod\">AuthMethod</a>","synthetic":true,"types":["tiberius::client::auth::AuthMethod"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tiberius/enum.ColumnType.html\" title=\"enum tiberius::ColumnType\">ColumnType</a>","synthetic":true,"types":["tiberius::row::ColumnType"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tiberius/enum.ColumnData.html\" title=\"enum tiberius::ColumnData\">ColumnData</a>&lt;'a&gt;","synthetic":true,"types":["tiberius::tds::codec::column_data::ColumnData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tiberius/enum.EncryptionLevel.html\" title=\"enum tiberius::EncryptionLevel\">EncryptionLevel</a>","synthetic":true,"types":["tiberius::tds::EncryptionLevel"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/error/struct.TokenError.html\" title=\"struct tiberius::error::TokenError\">TokenError</a>","synthetic":true,"types":["tiberius::tds::codec::token::token_error::TokenError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tiberius/error/enum.Error.html\" title=\"enum tiberius::error::Error\">Error</a>","synthetic":true,"types":["tiberius::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/numeric/struct.Numeric.html\" title=\"struct tiberius::numeric::Numeric\">Numeric</a>","synthetic":true,"types":["tiberius::tds::numeric::Numeric"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/time/struct.DateTime.html\" title=\"struct tiberius::time::DateTime\">DateTime</a>","synthetic":true,"types":["tiberius::tds::time::DateTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/time/struct.SmallDateTime.html\" title=\"struct tiberius::time::SmallDateTime\">SmallDateTime</a>","synthetic":true,"types":["tiberius::tds::time::SmallDateTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/time/struct.Date.html\" title=\"struct tiberius::time::Date\">Date</a>","synthetic":true,"types":["tiberius::tds::time::Date"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/time/struct.Time.html\" title=\"struct tiberius::time::Time\">Time</a>","synthetic":true,"types":["tiberius::tds::time::Time"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/time/struct.DateTime2.html\" title=\"struct tiberius::time::DateTime2\">DateTime2</a>","synthetic":true,"types":["tiberius::tds::time::DateTime2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/time/struct.DateTimeOffset.html\" title=\"struct tiberius::time::DateTimeOffset\">DateTimeOffset</a>","synthetic":true,"types":["tiberius::tds::time::DateTimeOffset"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/xml/struct.XmlSchema.html\" title=\"struct tiberius::xml::XmlSchema\">XmlSchema</a>","synthetic":true,"types":["tiberius::tds::xml::XmlSchema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tiberius/xml/struct.XmlData.html\" title=\"struct tiberius::xml::XmlData\">XmlData</a>","synthetic":true,"types":["tiberius::tds::xml::XmlData"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()